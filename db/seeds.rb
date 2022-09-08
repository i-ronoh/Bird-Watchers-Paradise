require 'pry'
puts "🌱 Seeding data..."

bird_list = [
{
    name: 'Heron', 
    image: "https://images.unsplash.com/photo-1662471238585-428367bd089b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
    primary_color: "Blue", 
    beak: "long-pointed", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Robin', 
    image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Gray", 
    beak: "short", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Flamingo', 
    image: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Pink", 
    beak: "curved", 
    feet_type: "Webbed", 
    flies: true
},
{
    name: 'Sparrow', 
    image: "https://images.unsplash.com/photo-1507477338202-487281e6c27e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    primary_color: "brown/grey", 
    beak: "conical", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Eagle', 
    image: "https://images.unsplash.com/photo-1604356589600-d353607c09b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Dark Brown", 
    beak: "Hooked", 
    feet_type: "Gripping", 
    flies: true
},
{
    name: 'Hummingbird', 
    image: "https://images.unsplash.com/photo-1552727451-6f5671e14d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Multi-colored", 
    beak: "Long-pointed", 
    feet_type: "Clinging", 
    flies: true
},
{
    name: 'Woodpecker', 
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Black", 
    beak: "Long-pointed", 
    feet_type: "Clinging", 
    flies: true
},
{
    name: 'Kingfisher', 
    image: "https://images.unsplash.com/photo-1601544829024-bc7f4c2213c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Blue/Orange", 
    beak: "Long-pointed", 
    feet_type: "Clinging", 
    flies: true
},
{
    name: 'Bluebird', 
    image: "https://images.unsplash.com/photo-1541971126-d98efa910469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Blue", 
    beak: "Conical", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Owl', 
    image: "https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Brown", 
    beak: "Hooked", 
    feet_type: "Gripping", 
    flies: true
},
{
    name: 'Seagull', 
    image: "https://images.unsplash.com/photo-1448227922836-6d05b3f8b663?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Grey", 
    beak: "Curved", 
    feet_type: "Webbed", 
    flies: true
},
{
    name: 'Pigeon', 
    image: "https://images.unsplash.com/photo-1608382956294-8ed6afe0dfb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Blue/grey", 
    beak: "Conical", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Crow', 
    image: "https://images.unsplash.com/photo-1580837891788-fef93e237445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Black", 
    beak: "Conical", 
    feet_type: "Perching", 
    flies: true
},
{
    name: 'Hawk', 
    image: "https://images.unsplash.com/photo-1589650744086-883f99e4a1c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Brown", 
    beak: "Hooked", 
    feet_type: "Gripping", 
    flies: true
},
{
    name: 'Macaw', 
    image: "https://images.unsplash.com/photo-1586768045025-f7cacc295831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Multi-colored", 
    beak: "Sickle-shaped", 
    feet_type: "Clinging", 
    flies: true
},
{
    name: 'Vulture', 
    image: "https://images.unsplash.com/photo-1607651092005-98657064ffe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "White", 
    beak: "Hooked", 
    feet_type: "Gripping", 
    flies: true
},
{
    name: 'Peacock', 
    image: "https://images.unsplash.com/photo-1575805774658-fdb9eeda71cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxiaXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Blue", 
    beak: "long-pointed", 
    feet_type: "Perched", 
    flies: true
},
{
    name: 'Toucan', 
    image: "https://images.unsplash.com/photo-1552728125-934ecb880061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Black", 
    beak: "Large", 
    feet_type: "Webbed", 
    flies: true
},
{
    name: 'Cardinal', 
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 
    primary_color: "Red", 
    beak: "Coned", 
    feet_type: "Perched", 
    flies: true
}]

if Bird.count == 0 
    bird_list.each do |bird|
        Bird.create(name: bird[:name], image: bird[:image], primary_color: bird[:primary_color], beak: bird[:beak], feet_type: bird[:feet_type], flies: bird[:flies])
    end
end



puts "🌱 Done seeding!"