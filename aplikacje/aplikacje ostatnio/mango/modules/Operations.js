
module.exports = function () {
  
    var opers = {
      
    //insert

        Insert: function (collection, data) {
            collection.insert(data, function (err, result) {                
                console.log(result)
            });
        },

        //select all - zwraca tablicę pasujących dokumentów

        SelectAll: function (collection) {
            collection.find({}).toArray(function (err, items) {
                console.log(items)
            });
        },

        Select2: function (collection, callback) {
            collection.find({}).toArray(function (err, items) {
               console.log(items)
               if (err) console.log(err)
               //funkcja zwracająca dane na zewnątrz
               else callback(items)
            });
        },

        //select - zwraca tablicę pasujących dokumentów, z ograniczeniem

        SelectAndLimit: function (collection) {
            collection.find({login: "test"}).toArray(function (err, items) {
                console.log(items)
            });
        },

        //delete - usunięcie poprzez id - uwaga na ObjectID

        DeleteById: function (ObjectID, collection, id) {
            collection.remove({ _id: ObjectID(id) }, function (err, data) {
                console.log(data)
            })
        },

        // update - aktualizacja poprzez id - uwaga na ObjectID
        // uwaga: bez $set usuwa poprzedni obiekt i wstawia nowy
        // z $set - dokunuje aktualizacji tylko wybranego pola

        UpdateById: function (ObjectID, collection, obj){
            collection.updateOne(
                { _id: ObjectID(obj.id)},
                { $set: { login:obj.login, password: obj.password } },
                function (err, data) {
                    console.log("update: "+data)                  
                })
        },
     
    }

    return opers;

}