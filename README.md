# Pattern for functions in React JS

In old code, have a problem looking my code react. The html part is very confuse, I always had so many parameters in each function, long lines, ugly code.

In new code, look this html functions, more beautiful, more simple to read.

This case the functions 'event' can only be used in html, and are impure functions. your goal is, others functions do not need to receive the values unnecessary by argument. The event functions use state, props, global const, without needing parameters.

And why don't we make the functions use state without parameters? Because we are organized people and we know that our functions must be pure, to be easy testing and for manutention.
