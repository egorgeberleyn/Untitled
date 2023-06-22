using Microsoft.Extensions.DependencyInjection;
using Untitled.Shared.Commands;

namespace Untitled.Application;

public static class StartupExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddCommands();
        return services;
    }
}