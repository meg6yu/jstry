'use strict';

describe('Stage5 Ajax', function() {

  // イントロダクション
  //
  // このレッスンではAjaxについて学び、
  // サーバーと非同期にリクエスト/レスポンスをやりとりする方法を身につけます。
  // Ajax用HTTPクライアントにはaxiosを利用します。
  // https://github.com/mzabriskie/axios

  // 'FIXME!!!' の部分を書き換え、テストがすべて通るようにしてください。

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('GET `/api/users` のレスポンスが200 OKであること', function(done) {
    // リクエスト成功時のステータスコードである200を取得し、statusに代入してください。
    // HTTPステータスコードについて http://directorblog.jp/archives/51170061.html
    
    var status; // レスポンスのステータスコード(Number)が入ります。

    axios.get('/api/users').then(function(res) {
      status = res.status;
    }).then(function() {
      expect(status).to.equal(200);
      done();
    });

  });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('GET `/api/users` レスポンスからユーザーの配列を抜き出せること', function(done) {
    
    var users; // 全ユーザー(ObjectのArray)が入ります。

    axios.get('/api/users').then(function(res) {
      users = res.data;
    }).then(function() {
      var userIds = users.map(function(user) { return user.id });
      expect(userIds).to.eql([0,1,2,3,4,5]);
      done()
    });
  });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('GET `/api/users/:id` 任意のユーザーidを指定すると、そのユーザーのオブジェクトを返すこと', function(done) {
    var targetUserId = 0;
    var targetUserName = 'Taro';

    var fetchedUser; // ユーザー(Object)が入ります。

    axios.get('/api/users/' + targetUserId).then(function(res) {
      fetchedUser = res.data;
    }).then(function() {
      expect(fetchedUser.id).to.equal(0);
      expect(fetchedUser.name).to.equal(targetUserName);
      done();
    });
  });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('GET `/api/users/:id` 存在しないユーザーidを指定すると、404が返ってくること', function(done) {
    var targetUserId = -1;

    var errorMessage; // エラーメッセージ(String)が入ります。

    axios.get('/api/users/' + targetUserId).then(function(res) {  ////ここから
      // ユーザーが存在しないのでステータスコードは404。
      // よってここは通らない。
    }).catch(function(err) {
      errorMessage = res.err;
      expect(errorMessage).to.equal('Not Found');
      done();
    });
  });

 // *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('POST `/api/echo` POSTリクエストで送信したmsgの値がそのまま返ってくること', function(done) {
    var message = 'Yahooooo';

    var requestBody = 'FIXME!!!';

    axios.post('/api/echo', requestBody).then(function(res) {
      expect(res.data.msg).to.equal(message);
      done();
    });
  });

// *～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～**～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*～*
  it('指定したIDのユーザーの友達の名前を取得できること', function(done) {
    var targetUserId = 3;

    var friendsName = []; // 友達の名前（Array）が入ります。

    axios.get('/api/users/' + targetUserId).then(function(res) {
      var promises = res.data.friends.map(function(friendId) {
        // 取得したfriendIDをもとにユーザーを取得
        return axios.get('FIXME!!!').then(function(friend) {
          friendsName.push('FIXME!!!');
        });
      });
      Promise.all(promises).then(function() {
        return expect(friendsName).to.eql(['Saburo', 'Noriko']);
      }).then(function() {
        done();
      });
    });

  });
});
