import { Library } from './library';

var args = process.argv.filter((value) => {
    return value.match(/((dir|language)=.+)/);
});

if (args.length === 2) {
    args = args.map((value) => { return value.split('=')[1] });
    Library.fromFiles(args[0], args[1]);
}
else {
    console.error('Arguments not found. Make sure that dir and language are defined, in this order.')
}