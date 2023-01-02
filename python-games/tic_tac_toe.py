def Insert_letter(letter,pos):
    box[pos]=letter
def print_Box(box):
    print(" -------------------")
    print(" |  "+box[1]+"  |  "+box[2]+"  |  "+box[3]+"  | ")
    print(" -------------------")
    print(" |  "+box[4]+"  |  "+box[5]+"  |  "+box[6]+"  | ")
    print(" -------------------")
    print(" |  "+box[7]+"  |  "+box[8]+"  |  "+box[9]+"  | ")
    print(" -------------------")
def free_box(pos):
    return box[pos] == ' '

def box_full(box):
    if box.count(' ') > 1:
        return False
    else:
        return True
def is_Winner(box,letter):
    return (box[1]==letter and box[2]==letter and box[3]==letter) or (box[4]==letter and box[5]==letter and box[6]==letter) or (box[7]==letter and box[8]==letter and box[9]==letter) or (box[1]==letter and box[4]==letter and box[7]==letter) or (box[2]==letter and box[5]==letter and box[8]==letter) or (box[3]==letter and box[6]==letter and box[9]==letter) or (box[1]==letter and box[5]==letter and box[9]==letter) or (box[3]==letter and box[5]==letter and box[7]==letter)

def player_Move():
    run = True
    while run:
        move = input("please select a position to enter the X between 1 to 9\n")
        try:
            move = int(move)
            if move > 0 and move < 10:
                if free_box(move):
                    run = False
                    Insert_letter('X' , move)
                else:
                    print('Sorry, this space is occupied')
            else:
                print('please type a number between 1 and 9')

        except:
            print('Please type a number')
def computer_move():
    possible_Moves = [x for x , letter in enumerate(box) if letter == ' ' and x != 0  ]
    move = 0
    for let in ['O' , 'X']:
        for i in possible_Moves:
            box_copy = box[:]
            box_copy[i] = let
            if is_Winner(box_copy, let):
                move = i
                return move

    corners_Open = []
    for i in possible_Moves:
        if i in [1 , 3 , 7 , 9]:
            corners_Open.append(i)

    if len(corners_Open) > 0:
        move = select_Random(corners_Open)
        return move

    if 5 in possible_Moves:
        move = 5
        return move

    edges_Open = []
    for i in possible_Moves:
        if i in [2,4,6,8]:
            edges_Open.append(i)

    if len(edges_Open) > 0:
        move = select_Random(edges_Open)
        return move

def select_Random(li):
    import random
    ln = len(li)
    r = random.randrange(0,ln)
    return li[r]
def main():
    print("Welcome to the game!")
    print_Box(box)

    while not(box_full(box)):
        if not(is_Winner(box , 'O')):
            player_Move()
            print_Box(box)
        else:
            print("sorry you loose!")
            break

        if not(is_Winner(box , 'X')):
            move = computer_move()
            if box_full(box):
                print("tie ")
            else:
                Insert_letter('O' , move)
                print('computer placed an o on position' , move , ':')
                print_Box(box)
        else:
            print("you win!")
            break


while True:
    x=input("Do you want to play? (y/n)\n")
    if x.lower()=="y":
        box=[" " for x in range(10)]
        print('____________________')
        main()
    else:
        break
# working of Enumerate function
'''
possible_move=[]
for i in range(len(box)):
    if box[i]==" " and i!=0:
        possible_move.append(i)
'''
