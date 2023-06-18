using Keycloak.AuthServices.Authentication;
using Keycloak.AuthServices.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Untitled.Infrastructure;

public static class StartupExtensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddKeycloak(configuration);
        return services;
    }
    
    private static IServiceCollection AddKeycloak(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddKeycloakAuthentication(configuration);
        services.AddAuthorization(o => o.AddPolicy("IsAdmin", b =>
        {
            b.RequireRealmRoles("admin");
            b.RequireResourceRoles("r-admin"); // stands role for client resource
            b.RequireRole("r-admin");  // resource roles are mapped to ASP.NET Core Identity roles
        }));
        services.AddKeycloakAuthorization(configuration);
        
        return services;
    }
}