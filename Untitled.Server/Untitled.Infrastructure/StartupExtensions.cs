﻿using Keycloak.AuthServices.Authentication;
using Keycloak.AuthServices.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace Untitled.Infrastructure;

public static class StartupExtensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration,
        ConfigureHostBuilder host)
    {
        services.AddKeycloak(configuration);
        services.AddLogging(configuration, host);
        return services;
    }

    private static void AddKeycloak(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddKeycloakAuthentication(configuration);
        services.AddAuthorization(o => o.AddPolicy("IsAdmin", b =>
        {
            b.RequireRealmRoles("admin");
            b.RequireResourceRoles("r-admin"); // stands role for client resource
            b.RequireRole("r-admin"); // resource roles are mapped to ASP.NET Core Identity roles
        }));
        services.AddKeycloakAuthorization(configuration);
    }

    private static void AddLogging(this IServiceCollection services, IConfiguration configuration,
        ConfigureHostBuilder host)
    {
         var logger = new LoggerConfiguration()
            .ReadFrom.Configuration(configuration)
            .CreateLogger();

        host.UseSerilog(logger);
    }
}