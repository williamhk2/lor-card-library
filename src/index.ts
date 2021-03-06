import { Library } from './library';

var args = process.argv.filter((value) => {
    return value.match(/language=.+/);
});

if (args.length === 1) {
    args = args.map((value) => { return value.split('=')[1] });
    Library.fromFiles(args[0]);
}
else {
    console.error('Arguments not found. Make sure that language argument are defined.')
}