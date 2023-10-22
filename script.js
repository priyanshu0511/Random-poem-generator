window.onload=function(){


let poem=document.querySelector(".poem")
let author=document.querySelector(".author")
let btn=document.querySelector(".generate")

const poems=[{
    poem: `A voice said, Look me in the stars
    And tell me truly, men of earth,
    If all the soul-and-body scars
    Were not too much to pay for birth.`,
    author: "Robert Frost"
},{
    poem: `Curtains forcing their will
    against the wind,
    children sleep,
    exchanging dreams with
    seraphim. The city
    drags itself awake on
    subway straps; and
    I, an alarm, awake as a
    rumor of war,
    lie stretching into dawn,
    unasked and unheeded.`,
    author: "Maya Angelou"
},{
    poem: `The room I entered was a dream of this room.
    Surely all those feet on the sofa were mine.
    The oval portrait
    of a dog was me at an early age.
    Something shimmers, something is hushed up.
    
    We had macaroni for lunch every day
    except Sunday, when a small quail was induced
    to be served to us. Why do I tell you these things?
    You are not even here.`,
    author: "John Ashbery"
},{
    poem: `I’m telling the wrong lies,
    they are not even useful.
    
    The right lies would at least
    be keys, they would open the door.
    
    The door is closed; the chairs,
    the tables, the steel bowl, myself
    
    shaping bread in the kitchen, wait
    outside it.`,
    author: "Margaret Atwood"
},{
    poem: `O Rose thou art sick.
    The invisible worm,
    That flies in the night
    In the howling storm:
    
    Has found out thy bed
    Of crimson joy:
    And his dark secret love
    Does thy life destroy.`,
    author: "William Blake"
},{
    poem: `Each flower a wilting sun
    The death of a new day is never kind
    Grief ain’t no song
    No loss is this romantic`,
    author: "Mahogany L. Browne"
},{
    poem: `I saw a man pursuing the horizon;
    Round and round they sped.
    I was disturbed at this;
    I accosted the man.
    “It is futile,” I said,
    “You can never —”
    
    “You lie,” he cried,
    And ran on.`,
    author: "Stephen Crane"
},{
    poem: `“Hope” is the thing with feathers –
    That perches in the soul –
    And sings the tune without the words –
    And never stops – at all –
    
    And sweetest – in the Gale – is heard –
    And sore must be the storm –
    That could abash the little Bird
    That kept so many warm –
    
    I’ve heard it in the chillest land –
    And on the strangest Sea –
    Yet – never – in Extremity,
    It asked a crumb – of me.`,
    author: "Emily Dickinson"
},{
    poem: `Some say the world will end in fire,
    Some say in ice.
    From what I’ve tasted of desire
    I hold with those who favor fire.
    But if it had to perish twice,
    I think I know enough of hate
    To say that for destruction ice
    Is also great
    And would suffice.`,
    author: "Robert Frost"
},{
    poem: `What happens to a dream deferred?
    Does it dry up
    like a raisin in the sun?
    Or fester like a sore—
    And then run?
    Does it stink like rotten meat?
    Or crust and sugar over—
    like a syrupy sweet?
    Maybe it just sag
    like a heavy load.
    
    Or does it explode?`,
    author: "Langston Hughes"
},{
    poem: `A woman who writes feels too much,
    those trances and portents!
    As if cycles and children and islands
    weren’t enough; as if mourners and gossips
    and vegetables were never enough.
    She thinks she can warn the stars.
    A writer is essentially a spy.
    Dear love, I am that girl.`,
    author: "Anne Sexton"
},]

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*poems.length)
    poem.innerText=poems[random].poem;
    author.innerText=poems[random].author;
    })}