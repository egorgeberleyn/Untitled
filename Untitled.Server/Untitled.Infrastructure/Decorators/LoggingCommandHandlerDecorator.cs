using Microsoft.Extensions.Logging;
using Untitled.Shared.Abstractions.Commands;

namespace Untitled.Infrastructure.Decorators;

internal sealed class LoggingCommandHandlerDecorator<TCommand> : ICommandHandler<TCommand> 
    where TCommand : class, ICommand
{
    private readonly ICommandHandler<TCommand> _commandHandler;
    private readonly ILogger<LoggingCommandHandlerDecorator<TCommand>> _logger;

    public LoggingCommandHandlerDecorator(ICommandHandler<TCommand> commandHandler, 
        ILogger<LoggingCommandHandlerDecorator<TCommand>> logger)
    {
        _commandHandler = commandHandler;
        _logger = logger;
    }

    public async Task HandleAsync(TCommand command)
    {
        var commandType = command.GetType().Name;

        try
        {
            _logger.LogInformation("Started processing {CommandType} command", commandType);
            await _commandHandler.HandleAsync(command);
            _logger.LogInformation("Finished processing {CommandType} command", commandType);

        }
        catch
        {
            _logger.LogError("Failed to process {CommandType} command", commandType);
            throw;
        }
    }
}