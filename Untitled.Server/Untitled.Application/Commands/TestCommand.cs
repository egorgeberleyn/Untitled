using Untitled.Shared.Abstractions.Commands;

namespace Untitled.Application.Commands;

public record TestCommand(int Id, string Name): ICommand;

public class TestCommandHandler : ICommandHandler<TestCommand>
{
    public Task HandleAsync(TestCommand command)
    {
        return Task.CompletedTask;
    }
}