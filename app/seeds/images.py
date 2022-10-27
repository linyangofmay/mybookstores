from app.models import db, Image


def seed_images():
    i1 =Image(
      url = 'https://images.unsplash.com/photo-1531674842274-9563aa15686f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
      bookstoreId = 1
    )
    i2 =Image(
      url= "https://images.unsplash.com/photo-1587377118541-d16160326b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      bookstoreId = 1
    )
    i3 =Image(
      url = 'https://images.unsplash.com/photo-1532682908332-165811c1f832?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
      bookstoreId = 1
    )
    i4 =Image(
      url = 'https://images.unsplash.com/photo-1509565118126-4f0ff5aec05d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80',
      bookstoreId = 2
    )
    i5 =Image(
      url = 'https://images.unsplash.com/photo-1588979657293-6398a0c25726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      bookstoreId = 2
    )
    i6 =Image(
      url = 'https://images.unsplash.com/photo-1588979657293-6398a0c25726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 2
    )
    i7 =Image(
      url = 'https://images.unsplash.com/photo-1632743050362-0c61a1ad2462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      bookstoreId = 3
    )
    i8 =Image(
      url = 'https://images.unsplash.com/photo-1570939276551-59a90ac1b80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      bookstoreId = 3
    )
    i9 =Image(
      url = 'https://images.unsplash.com/photo-1662476722258-d77afb14430b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hha2VzcGVhcmUlMjBhbmQlMjBjb21wYW55JTIwcGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 3
    )
    i10 =Image(
      url = 'https://images.unsplash.com/photo-1635198585496-4de86ad4154b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
      bookstoreId = 4
    )
    i11 =Image(
      url = 'https://images.unsplash.com/photo-1568301856220-8d0dc08a6d48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxCaVF0XzRtdU1na3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 4
    )
    i12 =Image(
      url = 'https://images.unsplash.com/photo-1635099347794-714586a3a46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 4
    )
    i13 =Image(
      url = 'https://images.unsplash.com/photo-1475010040281-9c4f94108f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xCaVF0XzRtdU1na3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 5
    )
    i14 =Image(
      url = 'https://images.unsplash.com/photo-1528700850553-6a45e6f143db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mzh8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 5
    )
    i15 =Image(
      url = 'https://images.unsplash.com/photo-1566131974163-e49067bc4d6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDB8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 5
    )
    i16 =Image(
      url = 'https://images.unsplash.com/photo-1580746189551-08cadb65ee61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDJ8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 6
    )
    i17 =Image(
      url = 'https://images.unsplash.com/photo-1577058005446-f4380dcc4e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTB8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 6
    )
    i18 =Image(
      url = 'https://images.unsplash.com/photo-1551133990-60f24c1e4158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDh8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 6
    )
    i19 =Image(
      url = 'https://images.unsplash.com/photo-1584801096196-592feb269e31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTd8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 7
    )
    i20 =Image(
      url = 'https://images.unsplash.com/photo-1578511161102-485cc0775c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Njd8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 7
    )
    i21 =Image(
      url = 'https://images.unsplash.com/photo-1574368666294-f1e87e94165c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 7
    )
    i22 =Image(
      url = 'https://images.unsplash.com/photo-1524311583145-d5593bd3502a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODB8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 8
    )
    i23 =Image(
      url = 'https://images.unsplash.com/photo-1575903185821-ddce6031a4e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODN8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 8
    )
    i24 =Image(
      url = 'https://images.unsplash.com/photo-1573592371950-348a8f1d9f38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODV8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 8
    )
    i25 =Image(
      url = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTJ8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 9
    )
    i26 =Image(
      url = 'https://images.unsplash.com/photo-1564042549107-24437f0603d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTV8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 9
    )
    i27 =Image(
      url = 'https://images.unsplash.com/photo-1644211492216-8a5e874023f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 9
    )
    i28 =Image(
      url = 'https://images.unsplash.com/photo-1649214168691-87cd8c07bac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      bookstoreId = 10
    )
    i29 =Image(
      url = 'https://images.unsplash.com/photo-1592492572204-81370305d4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTAwfEJpUXRfNG11TWdrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 10
    )
    i30 =Image(
      url = 'https://images.unsplash.com/photo-1490004047268-5259045aa2b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTAyfEJpUXRfNG11TWdrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 10
    )
    i31 =Image(
      url = 'https://images.unsplash.com/photo-1520140456651-4a1b613dfb56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTAzfEJpUXRfNG11TWdrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 11
    )
    i32 =Image(
      url = 'https://images.unsplash.com/photo-1571075069288-1b53fc4a0ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTA0fEJpUXRfNG11TWdrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 11
    )
    i33 =Image(
      url = 'https://images.unsplash.com/photo-1536965764833-5971e0abed7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTA3fEJpUXRfNG11TWdrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 11
    )
    i34 =Image(
      url = 'https://images.unsplash.com/photo-1601073283455-b152abd9abd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OTh8QmlRdF80bXVNZ2t8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 12
    )
    i35 =Image(
      url = 'https://images.unsplash.com/photo-1614623171216-7755e8650e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw0OTU2NDl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 12
    )
    i36 =Image(
      url = 'https://images.unsplash.com/photo-1578511161102-485cc0775c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8NDk1NjQ5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 12
    )
    i37 =Image(
      url = 'https://images.unsplash.com/photo-1552879426-64db141e378e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8NDk1NjQ5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 13
    )
    i38 =Image(
      url = 'https://images.unsplash.com/photo-1481415004805-b5b5c1e19e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mjh8NDk1NjQ5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 13
    )
    i39 =Image(
      url = 'https://images.unsplash.com/photo-1519498955853-621f66b86038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDN8NDk1NjQ5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 13
    )
    i40 =Image(
      url = 'https://images.unsplash.com/photo-1538765422338-25c9bca65519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDV8NDk1NjQ5fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 14
    )
    i41 =Image(
      url = 'https://images.unsplash.com/photo-1593761103701-192cdc8e3aba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
      bookstoreId = 14
    )
    i42 =Image(
      url = 'https://images.unsplash.com/photo-1501168025369-84d106f7a5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxNjAwMDc3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 14
    )
    i43 =Image(
      url = 'https://images.unsplash.com/photo-1575903185821-ddce6031a4e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 15
    )
    i44 =Image(
      url = 'https://images.unsplash.com/photo-1584064003902-e5991328e8e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 15
    )
    i45 =Image(
      url = 'https://images.unsplash.com/photo-1611600382801-453de5aded2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 15
    )
    i46 =Image(
      url = 'https://images.unsplash.com/photo-1580746189551-08cadb65ee61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 16
    )
    i47 =Image(
      url = 'https://images.unsplash.com/photo-1602014848312-a95c8d144193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 16
    )
    i48 =Image(
      url = 'https://images.unsplash.com/photo-1605344178743-4313131d2c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      bookstoreId = 16
    )
    i49 =Image(
      url = 'https://images.unsplash.com/photo-1630855856911-c485c56fcaac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 17
    )
    i50 =Image(
      url = 'https://images.unsplash.com/photo-1637568406635-02b0b3e7de7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 17
    )
    i51 =Image(
      url = 'https://images.unsplash.com/photo-1635198524914-6a279f4adfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFuc2lhbiUyMGJvb2tzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      bookstoreId = 17
    )

    db.session.add(i1)
    db.session.add(i2)
    db.session.add(i3)
    db.session.add(i4)
    db.session.add(i5)
    db.session.add(i6)
    db.session.add(i7)
    db.session.add(i8)
    db.session.add(i9)
    db.session.add(i10)
    db.session.add(i11)
    db.session.add(i12)
    db.session.add(i13)
    db.session.add(i14)
    db.session.add(i15)
    db.session.add(i16)
    db.session.add(i17)
    db.session.add(i18)
    db.session.add(i19)
    db.session.add(i20)
    db.session.add(i21)
    db.session.add(i22)
    db.session.add(i23)
    db.session.add(i24)
    db.session.add(i25)
    db.session.add(i26)
    db.session.add(i27)
    db.session.add(i28)
    db.session.add(i29)
    db.session.add(i30)
    db.session.add(i31)
    db.session.add(i32)
    db.session.add(i33)
    db.session.add(i34)
    db.session.add(i35)
    db.session.add(i36)
    db.session.add(i37)
    db.session.add(i38)
    db.session.add(i39)
    db.session.add(i40)
    db.session.add(i41)
    db.session.add(i42)
    db.session.add(i43)
    db.session.add(i44)
    db.session.add(i45)
    db.session.add(i46)
    db.session.add(i47)
    db.session.add(i48)
    db.session.add(i49)
    db.session.add(i50)
    db.session.add(i51)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
