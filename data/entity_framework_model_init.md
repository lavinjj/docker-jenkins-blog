# Entity Framework model init

Also if Entity Framework 4.1 can generate the database for us, we still have the possibility to manage how the database have to be built.
All schema objects like tables, primary keys, column names and so on... can follow a specific construction behavior.

To do this, we can make the override on the method OnModelCreating of DbContext class.

For example:

    public class ADMDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
    
        protected override void OnModelCreating( DbModelBuilder modelBuilder )
        {
            modelBuilder.Entity<User>().ToTable( "Users" );
    
            modelBuilder.Entity<User>().HasKey( o => o.Id );
            modelBuilder.Entity<User>().Property( o => o.UserName ).IsRequired();
    
            modelBuilder.Entity<Role>().HasKey( o => o.Id );
            modelBuilder.Entity<Role>().Property( o => o.Name ).IsRequired();
    
            base.OnModelCreating( modelBuilder );
        }
    }
    
*Antonio Di Motta*