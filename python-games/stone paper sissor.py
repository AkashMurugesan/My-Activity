import random
signs={1:"   -------\n  /       \ \n /         \ \n    stone    \n \         / \n  \       /\n   ------- ",2:"|-----------|\n|-----------|\n|-----------|\n|---paper---|\n|-----------|\n|-----------|\n|-----------|",3:r"========\\   //\\"+"\n"+r"   sis   \\0//  \\"+"\n"+r"   sor   //0\\  // "+"\n"+r"========//   \\//"}
player_score=0
computer_score=0
print("welcome to game")
print("1 = stone\n2 = paper\n3 = sissor")
def player(p1):
    return signs[p1]
def computer(p2):
    return signs[p2]
while True:
    print("Enter the Number between 1 to 3")
    x=input()
    y=random.randint(1,3)
    try:
        x=int(x)
        if x>0 and x<4:
            print(player(x))
            print(computer(y))
            if player(x)==computer(y):
                print('tie')
                print("Score card\nplayer = "+str(player_score)+"\ncomputer = "+str(computer_score))
            elif ((player(x)=="   -------\n  /       \ \n /         \ \n    stone    \n \         / \n  \       /\n   ------- " and computer(y)==r"========\\   //\\"+"\n"+r"   sis   \\0//  \\"+"\n"+r"   sor   //0\\  // "+"\n"+r"========//   \\//") or (player(x)=="|-----------|\n|-----------|\n|-----------|\n|---paper---|\n|-----------|\n|-----------|\n|-----------|" and computer(y)=="   -------\n  /       \ \n /         \ \n    stone    \n \         / \n  \       /\n   ------- ") or (player(x)==r"========\\   //\\"+"\n"+r"   sis   \\0//  \\"+"\n"+r"   sor   //0\\  // "+"\n"+r"========//   \\//" and computer(y)=="|-----------|\n|-----------|\n|-----------|\n|---paper---|\n|-----------|\n|-----------|\n|-----------|")):
                player_score+=1
                print("Score card\nplayer = "+str(player_score)+"\ncomputer = "+str(computer_score))
            else:
                computer_score+=1
                print("Score card\nplayer = "+str(player_score)+"\ncomputer = "+str(computer_score))
        else:
            print("Invalid")
    except:
        print("please Enter a Number")
    if computer_score==3:
        print("Sorry you loose")
        break
    elif player_score==3:
        print("you Win")
        break
    
