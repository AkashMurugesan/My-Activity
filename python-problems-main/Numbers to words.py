a=int(input())
ones={1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten',11:'eleven',12:'twelve',13:'thirteen',14:'fourteen',15:'fifteen',16:'sixteen',17:'seventeen',18:'eighteen',19:'nineteen',20:'twenty'}
tens={2:'twenty',3:'thirty',4:'fourty',5:'fifty',6:'sixty',7:'seventy',8:'eighty',9:'ninety'}
while a>0:
    b=len(str(a))
    c=int('1'+((b-1)*'0'))
    d=len(str(c))
    if a<=20:
        print(ones[a])
        break
    elif a<=99:
        print(tens[a//c],end=" ")
        print(ones[a%c],end="")
        break
    elif a<=999:
        print(ones[a//c],end=" hundred ")
        a=a%c
    elif a<=9999:
        print(ones[a//c],end=" thousand ")
        a=a%c
    elif a<=99999:
        if a//c==1:
            c=c//10
            print(ones[a//c],end=" thousand ")
        else:
            print(tens[a//c],end=" ")
        a=a%c
    elif a<=999999:
        print(ones[a//c],end=" lakhs ")
        a=a%c
    elif a<=9999999:
        if a//c==1:
            c=c//10
            print(ones[a//c],end=" laks ")
        else:
            print(tens[a//c],end=" ")
        a=a%c
    elif a<=99999999:
        print(ones[a//c],end=" crore ")
        a=a%c
    elif a<=999999999:
        if a//c==1:
            c=c//10
            print(ones[a//c],end=" crore ")
        else:
            print(tens[a//c],end=" ")
        a=a%c
    else:
        print("Invalid Input - it not working above 999999999")
        break
        
