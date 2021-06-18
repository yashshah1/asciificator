```
                        .__ .__   _____ .__                   __
_____     ______  ____  |__||__|_/ ____\|__|  ____  _____   _/  |_   ____  _______
\__  \   /  ___/_/ ___\ |  ||  |\   __\ |  |_/ ___\ \__  \  \   __\ /  _ \ \_  __ \
 / __ \_ \___ \ \  \___ |  ||  | |  |   |  |\  \___  / __ \_ |  |  (  <_> ) |  | \/
(____  //____  > \___  >|__||__| |__|   |__| \___  >(____  / |__|   \____/  |__|
     \/      \/      \/                          \/      \/
```

# Asciificator

A really dumb tool (without a programatic usage) that converts your images into ASCII art :P

# Install

`npm i -g asciificator`

# Usage

```
$ asciificator -h
Usage: asciificator [options]

Options:
  -V, --version             output the version number
  -i, --input-file <file>   Path to input file
  -o, --output-file <file>  Name of output file (default: null)
  --image-width <width>     Width of ouput ASCII art (default: 100)
  --image-height <height>   Width of ouput ASCII art (default: null)
  --red-weight <weight>     Red Weight for B/w (default: 0.3)
  --green-weight <weight>   Green Weight for B/w (default: 0.578)
  --blue-weight <weight>    Blue Weight for B/w (default: 0.122)
  -h, --help                display help for command

# print it to console
$ asciificator -i <path-or-url-to-image>

# to write it to a file:
$ asciificator -i <path-to-image> -o <path-to-file>
$ asciificator -i <path-to-image> > path-to-file # alternate
```

# Example

```
$ asciificator -ihttps://lh3.googleusercontent.com/proxy/ET1TTUt5dRYpruCmPUsf4VgjztGaQFfeDRceaMWJP-tDtKjgGd-VMHC0L0f-vIh243MAjnOsl3OUK2zJOZLCPY2Qx8I5R0mii9yIFSkRHoH8TE7xeS-Ru5wwpyy4oRJ-BZp8GwPil7YVwdT5wZmwm7Lvwg0O4gRP3gm90w \
--image-width 100 \
--image-height 40

????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
??????????????????????????????????????????????????????????????????????????????**+++?????????????????
?????????????????????????????????????????????????????????????????**++;;::,,,......,?????????????????
?????????????????????????????????????????????????????**++;;::,,...................,?????????????????
????????????????????????????????????????*???+;::,,................................,?????????????????
????????????????????????????**++;;::,,...???:.....................................,?????????????????
?????????????????++;;::,,................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????++++++++++++++++++++++++???*++++++********************************?????????????????
?????????????????;;;;;;;;;;;;;;;+++++++++???*+++++++++++++++++++++++***************?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????,.......................???:.....................................,?????????????????
?????????????????*++;;::,,...............???:.....................................,?????????????????
?????????????????????????????**++;;::,,..???:.....................................,?????????????????
????????????????????????????????????????????*;;::,,...............................,?????????????????
??????????????????????????????????????????????????????**++;;::,,..................,?????????????????
??????????????????????????????????????????????????????????????????**++;;::,,,.....,?????????????????
???????????????????????????????????????????????????????????????????????????????**++?????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????????
```

# Contributing

Real help is needed in porting this to have prgramatic usage.<br />
Feel free to fork and make a PR.
