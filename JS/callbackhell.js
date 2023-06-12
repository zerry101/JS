// Call back Hell also known as PYRAMID OF DOOM
function sayhello(callback = (arg1, arg2) => {
    hello();
    hi();
    callback = (arg1, arg2) => {
        hello();
        hi();
        callback = (arg1, arg2) => {
            hello();
            hi();
            callback = (arg1, arg2) => {
                hello();
                hi();
                callback = (arg1, arg2) => {
                    hello();
                    hi();
                    callback = (arg1, arg2) => {
                        hello();
                        hi();
                        callback = (arg1, arg2) => {
                            hello();
                            hi();
                            callback=(arg1,arg2)=>{
                                hello();
                                hi();
                                callback=(arg1,arg2)=>{
                                    hello();
                                    hi();
                                    callback=(arg1,arg2)=>{
                                        hello();
                                        hi();
                                        callback=(arg1,arg2)=>{
                                            hello();
                                            hi();
                                            callback=(arg1,arg2)=>{
                                                hello();
                                                hi();
                                                callback=(arg1,arg2)=>{
                                                    hello();
                                                    hi();
                                                    callback=(arg1,arg2)=>{
                                                        hello();
                                                        hi();
                                                        callback=(arg1,arg2)=>{
                                                            hello();
                                                            hi();
                                                        }
                                                        callback();
                                                            
                                                    }
                                                    callback();
                                                    
                                                }
                                                callback();
                                                
                                            }
                                            callback();
                                            
                                        }
                                        callback();
                                        
                                    }
                                    callback();
                                    
                                }
                                callback();
                                
                            }
                            callback();
                            
                        }
                        callback();

                    }
                    callback();

                }
                callback();

            }
            callback();

        }
        callback();

    }
    callback();
}) {
    callback();
    console.log('i said hello');
}

hello = () => {
    console.log('hello');
}

hi = () => {
    console.log('hi');
}

sayhello();