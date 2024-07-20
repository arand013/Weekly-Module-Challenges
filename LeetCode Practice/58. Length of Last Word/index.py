def length_of_last_word(s):
    s = s.strip()
    length = 0
    for i in range(len(s) - 1, -1, -1):
        if s[i] != ' ':
            length += 1
        elif length > 0:
            break
    return length

def length_of_last_word(s):
    s = s.split()  # Split the string into a list of words
    return len(s[-1]) if s else 0  # Return the length of the last word, or 0 if the string is empty