// -- COMPONENT DECORATOR -- //
// Propose 

type HasInit = { init: () => void };
type ComponentProps = {
    imports?: HasInit[]
}
export function Component( options: ComponentProps ) {
    if (options.imports) {
        options.imports.forEach(item => item.init());
    }
    return (target: Function, context: ClassDecoratorContext) => {
        if (context.kind === 'class') {
            console.log("Component", {target, context});
        }
    }
}

