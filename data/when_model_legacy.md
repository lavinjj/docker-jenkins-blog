# When the model is legacy

I started a new Asp.Net MVC project with an existing domain model and DAL logic. Unfortunately “the legacy domain model” was made for different data access logic (client-server) while I need to show to show information in a different way.

Searching an easy solution to adapt old logic (Building) to new logic (BuildingDTO) presentation I found Aftermap method of [Automapper](http://automapper.org).
Below the code that I wrote:

    namespace LegacyDomain
    {
        public class Building
        {
            public int Id { get; set; }
            public IList Resources { get; set; }
            //.....
        }
    
        public class Resource
        {
            public int Id { get; set; }
            public byte[] Bytes { get; set; }
            public ResourceType RType { get; set; }
        }
    
        public enum ResourceType { SmallPhoto, BigPhoto }
    }
    
    namespace DTO
    {
        public class BuildingDTO
        {
            public int Id { get; set; }
            public int SmallPhotoId { get; set; }
            public int BigPhotoId { get; set; }
        }
    }
    
    Mapper.CreateMap()
            .AfterMap( ( i, d ) => d.SmallPhotoId = i.Resources
            .Where( r => r.RType == ResourceType.SmallPhoto )
            .Select( r => r.Id ).SingleOrDefault() )
            .AfterMap( ( i, d ) => d.BigPhotoId = i.Resources
            .Where( r => r.RType == ResourceType.BigPhoto )
            .Select( r => r.Id ).SingleOrDefault() )
            
*Antonio Di Motta*
    
