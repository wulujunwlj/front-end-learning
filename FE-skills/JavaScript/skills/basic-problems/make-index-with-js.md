# 给网页内容简历索引目录

```JS
// 生成index
function articleIndex() {
    var $article = $('.article');
    var $header = $article.find('h1, h2, h3');
    var _html = '<div class="panel panel-default widget-outline"><div class="panel-heading" id="hideOutline">目录结构<span class="text-muted pull-right caret"></span></div><div class="panel-body"><ul id="articleIndex"></ul></div></div>';
    $('.side').append(_html);
    $('.widget-outline').css({
        'width': $('.side').width() + 15,
        //'left': $('.side').offset().left + 15,
    });
    var _tagLevel = 1;                  // 最初的level
    var _$wrap = $('#articleIndex');    // 最初的wrap
    $header.each(function(index) {
        if($(this).text().trim() === '') {     // 空的title
            return;
        }
        $(this).attr('id', 'articleHeader' + index);      // 加id
        var _tl = parseInt($(this)[0].tagName.slice(1));  // 当前的tagLevel
        var _$li = null;
        if(index === 0 || _tl === _tagLevel) {  // 第一个或者是与上一个相同
            _$li = $('<li><a href="#articleHeader'+ index +'">' + $(this).text() + '</a></li>');
            _$wrap.append(_$li);
        } else if(_tl > _tagLevel) {  // 当前的大于上次的
            _$li = $('<ul><li><a href="#articleHeader' + index + '">' + $(this).text() + '</a></li></ul>');
            _$wrap.append(_$li);
            _$wrap = _$li;
        } else if(_tl < _tagLevel) {    // 当前的小于上次的
            _$li = $('<li><a href="#articleHeader' + index + '">' + $(this).text() + '</a></li>');
            if(_tl === 1) {
                $('#articleIndex').append(_$li);
                _$wrap = $('#articleIndex');
            } else {
                _$wrap.parent('ul').append(_$li);
                _$wrap = _$wrap.parent('ul');
            }
        }
        _tagLevel = _tl;
    });
}
```