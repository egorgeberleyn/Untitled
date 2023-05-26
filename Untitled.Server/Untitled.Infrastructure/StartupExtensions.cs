using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Untitled.Infrastructure;

public static class StartupExtensions
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        return services;
    }
}