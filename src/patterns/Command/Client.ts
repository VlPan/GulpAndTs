import { Comp } from './Comp';
import { UserInvoker } from './Invoker/UserInvoker';
import { StartCommand } from './Commands/StartCommand';
import { StopCommand } from './Commands/StopCommand';
import { ResetCommand } from './Commands/ResetCommand';


  let c = new Comp();
  let user = new UserInvoker(new StartCommand(c), new StopCommand(c), new ResetCommand(c));
  user.startComputer();
  user.stopComputer();
  user.resetComputer();