// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/*~ This is the module plugin template file. You should rename it to index.d.ts
 *~ and place it in a folder with the same name as the module.
 *~ For example, if you were writing a file for "super-greeter", this
 *~ file should be 'super-greeter/index.d.ts'
 */

/*~ On this line, import the module which this module adds to */
import * as m from 'communicatorModularAMD';

/*~ Here, declare the same module as the one you imported above */
declare module 'communicatorModularAMD' {
    /*~ Inside, add new function, classes, or variables. You can use
     *~ unexported types from the original module if needed. */
    export function goodbye(): string;


}