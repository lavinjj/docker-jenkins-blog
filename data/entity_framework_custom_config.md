# Entity Framework custom configuration

With [EF Code-First](http://msdn.microsoft.com/en-us/data/aa937723) it’s easy to create a database starting from domain model, 
but it’s always possible create an **our custom configuration**.

In my project I have two class, Role and User:

    public class Role 
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
     }
     
     public class User 
     {
        IList<Role> _role;
     
        public virtual IList<Role> Roles
        {
            get { return _role ?? ( _role = new List<Role>() ); }
        }
        
        public Guid Id { get; set; }
        public string UserName{ get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
If you want to create custom configuration for User and Role entities, you can write others two class that works as configuration,
**RoleConfigration** and **UserConfiguration** which extend *EntityTypeConfiguration*:

    // custom configuration for Role
    public class RoleConfiguration : EntityTypeConfiguration<Role>
    {
        public RoleMapping()
        {
            ToTable( "Roles" ); // ef will create a table with name Roles
            HasKey(o => o.Id);  // define a key
            Property( o => o.Name ).IsRequired(); // this property is required on repository
        }
    }

    // custom configuration for User
    public class UserConfiguration : EntityTypeConfiguration<User>
    {
        public UserMapping()
        {
            ToTable( "Users" ); // ef will create a table with name Users
         
            HasKey(o => o.Id);  // define a key
            // the property is required on repository
            Property( o => o.UserName ).IsRequired(); 
            // this property is nullable and map on column with name firstname
            Property( o => o.FirstName ).HasColumnName("firstname");
            // this property is nullable and map on column with name lastname
            Property( o => o.LastName ).HasColumnName("lastname"); 

            // configure many-to-many navigation property between
            // User and Role
            HasMany( o => o.Roles ).WithMany();
        }
    }
Now, for using our custom configuration, we will add RoleConfiguration and UserConfiguration to **DbContext**:

    public class MyDbContext : DbContext
    {
        public virtual IDbSet CreateSet()
            where TEntity : class
        {
            return Set();
        }

        protected override void OnModelCreating( DbModelBuilder modelBuilder )
        {
            modelBuilder.Configurations.Add( new RoleConfiguration() );
            modelBuilder.Configurations.Add( new UserConfiguration() );

            base.OnModelCreating( modelBuilder );
        }
    }
    
*Antonio Di Motta*
