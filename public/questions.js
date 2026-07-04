const questions = [
{
type:"meaning",
question:"Khéo ăn thì no, khéo co thì ấm.",
answers:[
"Biết ứng xử và chi tiêu hợp lý thì cuộc sống sẽ ổn.",
"Người ăn nhiều sẽ khỏe mạnh.",
"Mặc nhiều quần áo sẽ không bị lạnh."
],
correct:0,
explain:"Khuyên con người biết thu vén và ứng xử khéo léo."
},

{
type:"meaning",
question:"Chọn bạn mà chơi, chọn nơi mà ở.",
answers:[
"Nên sống ở thành phố.",
"Nên lựa chọn môi trường và bạn bè tốt.",
"Chỉ nên chơi với người giàu."
],
correct:1,
explain:"Môi trường và bạn bè có ảnh hưởng lớn đến con người."
},

{
type:"meaning",
question:"Đi với bụt mặc áo cà sa, đi với ma mặc áo giấy.",
answers:[
"Nên thay đổi bản thân cho phù hợp với hoàn cảnh.",
"Luôn mặc áo đẹp.",
"Không nên tin người."
],
correct:0,
explain:"Khuyên con người biết ứng xử linh hoạt theo từng môi trường."
},

{
type:"meaning",
question:"Khôn đâu đến trẻ, khỏe đâu đến già.",
answers:[
"Người trẻ luôn khỏe hơn.",
"Con người đều có giới hạn theo thời gian.",
"Người già không nên làm việc."
],
correct:1,
explain:"Nhắc nhở quy luật tự nhiên của cuộc sống."
},

{
type:"meaning",
question:"Cái nết đánh chết cái đẹp.",
answers:[
"Ngoại hình quan trọng nhất.",
"Đức hạnh quý hơn vẻ đẹp hình thức.",
"Người đẹp thường không tốt."
],
correct:1,
explain:"Đề cao phẩm chất đạo đức hơn ngoại hình."
},

{
type:"meaning",
question:"Một giọt máu đào hơn ao nước lã.",
answers:[
"Tình thân luôn đáng quý hơn quan hệ xa lạ.",
"Máu quý hơn nước.",
"Gia đình nào cũng giàu."
],
correct:0,
explain:"Đề cao tình cảm huyết thống."
},

{
type:"meaning",
question:"Thuốc đắng dã tật, sự thật mất lòng.",
answers:[
"Sự thật thường dễ nghe.",
"Điều tốt thường không dễ chấp nhận.",
"Thuốc nào cũng đắng."
],
correct:1,
explain:"Lời thật có thể khó nghe nhưng mang lại điều tốt."
},

{
type:"meaning",
question:"Cờ đến tay ai người ấy phất.",
answers:[
"Ai gặp cơ hội thì người đó tận dụng.",
"Chỉ người may mắn mới thành công.",
"Muốn thắng phải chơi cờ."
],
correct:0,
explain:"Cơ hội đến với ai thì người đó quyết định kết quả."
},

{
type:"meaning",
question:"Trâu buộc ghét trâu ăn.",
answers:[
"Người có điều kiện thường ganh ghét người tự do.",
"Trâu rất hay đánh nhau.",
"Không nên nuôi nhiều trâu."
],
correct:0,
explain:"Chỉ sự đố kỵ của con người."
},

{
type:"meaning",
question:"Đứng núi này trông núi nọ.",
answers:[
"Không biết hài lòng với những gì mình có.",
"Leo núi rất thú vị.",
"Muốn khám phá thiên nhiên."
],
correct:0,
explain:"Phê phán sự không biết bằng lòng."
},

{
type:"meaning",
question:"Giấy rách phải giữ lấy lề.",
answers:[
"Giữ gìn sách vở cẩn thận.",
"Dù nghèo khó vẫn phải giữ đạo đức.",
"Không nên xé giấy."
],
correct:1,
explain:"Khuyên giữ nhân phẩm trong mọi hoàn cảnh."
},

{
type:"meaning",
question:"Có tật giật mình.",
answers:[
"Người có lỗi thường chột dạ.",
"Người hay giật mình vì yếu tim.",
"Ai cũng từng mắc lỗi."
],
correct:0,
explain:"Người làm điều sai thường tự lo sợ."
},

{
type:"meaning",
question:"Đục nước béo cò.",
answers:[
"Người khác lợi dụng lúc hỗn loạn để trục lợi.",
"Cò thích nước đục.",
"Nước đục nhiều cá."
],
correct:0,
explain:"Chỉ hành vi lợi dụng hoàn cảnh rối ren."
},

{
type:"meaning",
question:"Ếch ngồi đáy giếng.",
answers:[
"Thiếu hiểu biết nhưng lại tự cao.",
"Ếch sống dưới nước.",
"Ếch không biết bơi."
],
correct:0,
explain:"Phê phán người hiểu biết hạn hẹp nhưng kiêu ngạo."
},

{
type:"meaning",
question:"Ăn cây nào rào cây nấy.",
answers:[
"Phải biết bảo vệ nơi mang lại lợi ích cho mình.",
"Không nên chặt cây.",
"Nên trồng nhiều cây."
],
correct:0,
explain:"Khuyên sống có trách nhiệm và biết ơn."
},

{
type:"meaning",
question:"Ăn không ngồi rồi.",
answers:[
"Sống lười biếng, không lao động.",
"Ăn xong nên nghỉ ngơi.",
"Ngồi ăn đúng tư thế."
],
correct:0,
explain:"Chỉ người không chịu làm việc."
},

{
type:"meaning",
question:"Ăn chắc mặc bền.",
answers:[
"Sống tiết kiệm, không phung phí.",
"Chỉ mua đồ đắt tiền.",
"Mặc quần áo thật dày."
],
correct:0,
explain:"Khuyên sống giản dị và tiết kiệm."
},

{
type:"meaning",
question:"Có mới nới cũ.",
answers:[
"Phê phán việc có cái mới thì quên cái cũ.",
"Luôn nên mua đồ mới.",
"Không nên dùng đồ cũ."
],
correct:0,
explain:"Chỉ sự bạc bẽo, thay lòng đổi dạ."
},

{
type:"meaning",
question:"Khôn nhà dại chợ.",
answers:[
"Giỏi với người nhà nhưng kém khi ra ngoài.",
"Không nên đi chợ.",
"Ở nhà sẽ thông minh hơn."
],
correct:0,
explain:"Phê phán người chỉ giỏi trong phạm vi quen thuộc."
},

{
type:"meaning",
question:"Nói gần nói xa chẳng qua nói thật.",
answers:[
"Lời vòng vo nhưng vẫn phản ánh sự thật.",
"Không nên nói thật.",
"Chỉ nên nói thẳng."
],
correct:0,
explain:"Hàm ý dù nói khéo thì nội dung vẫn là sự thật."
},
  {
type:"meaning",
question:"Có công mài sắt, có ngày nên kim.",
answers:[
"Muốn thành công phải có nhiều tiền.",
"Kiên trì sẽ đạt được thành công.",
"Làm nghề rèn sẽ giỏi hơn người khác."
],
correct:1,
explain:"Khuyên con người phải kiên trì và bền bỉ thì sẽ đạt được mục tiêu."
},

{
type:"meaning",
question:"Uống nước nhớ nguồn.",
answers:[
"Biết ơn những người đi trước.",
"Luôn bảo vệ nguồn nước.",
"Chỉ uống nước sạch."
],
correct:0,
explain:"Nhắc nhở phải biết ơn cội nguồn và người đã giúp đỡ mình."
},

{
type:"meaning",
question:"Ăn quả nhớ kẻ trồng cây.",
answers:[
"Phải tự trồng cây mới có quả.",
"Biết quý trọng trái cây.",
"Biết ơn người tạo ra thành quả mình đang hưởng."
],
correct:2,
explain:"Khuyên con người phải biết nhớ ơn người tạo nên thành quả."
},

{
type:"meaning",
question:"Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.",
answers:[
"Đoàn kết sẽ tạo nên sức mạnh.",
"Càng nhiều cây càng đẹp.",
"Núi được tạo nên từ cây."
],
correct:0,
explain:"Đề cao sức mạnh của sự đoàn kết."
},

{
type:"meaning",
question:"Có chí thì nên.",
answers:[
"Có tiền thì thành công.",
"Có ý chí sẽ thành công.",
"Muốn thành công phải học giỏi."
],
correct:1,
explain:"Ý chí và quyết tâm là yếu tố quan trọng dẫn đến thành công."
},

{
type:"meaning",
question:"Lửa thử vàng, gian nan thử sức.",
answers:[
"Khó khăn giúp con người bộc lộ bản lĩnh.",
"Vàng rất dễ nóng chảy.",
"Sức khỏe quan trọng hơn tiền bạc."
],
correct:0,
explain:"Nghịch cảnh là thước đo bản lĩnh của con người."
},

{
type:"meaning",
question:"Đi một ngày đàng, học một sàng khôn.",
answers:[
"Đi nhiều sẽ tốn tiền.",
"Đi xa sẽ mệt.",
"Trải nghiệm giúp con người học hỏi thêm."
],
correct:2,
explain:"Khuyến khích học hỏi thông qua trải nghiệm thực tế."
},

{
type:"meaning",
question:"Tốt gỗ hơn tốt nước sơn.",
answers:[
"Nội dung quan trọng hơn hình thức.",
"Gỗ quý luôn đẹp hơn.",
"Sơn đẹp sẽ làm đồ vật bền hơn."
],
correct:0,
explain:"Đề cao giá trị bên trong hơn vẻ bề ngoài."
},

{
type:"meaning",
question:"Gần mực thì đen, gần đèn thì sáng.",
answers:[
"Đèn luôn sáng hơn mực.",
"Môi trường ảnh hưởng đến con người.",
"Mực rất khó giặt."
],
correct:1,
explain:"Con người chịu ảnh hưởng từ môi trường và những người xung quanh."
},

{
type:"meaning",
question:"Chớ thấy sóng cả mà ngã tay chèo.",
answers:[
"Gặp khó khăn không nên bỏ cuộc.",
"Đi biển rất nguy hiểm.",
"Không nên chèo thuyền khi có sóng."
],
correct:0,
explain:"Khuyên con người giữ vững ý chí trước khó khăn."
},

{
type:"meaning",
question:"Thất bại là mẹ thành công.",
answers:[
"Thành công không cần thất bại.",
"Thất bại giúp rút kinh nghiệm để thành công.",
"Người thành công đều thất bại đúng một lần."
],
correct:1,
explain:"Mỗi thất bại đều mang lại bài học quý giá."
},

{
type:"meaning",
question:"Tre già măng mọc.",
answers:[
"Tre mọc rất nhanh.",
"Con người nên trồng tre.",
"Các thế hệ sẽ nối tiếp nhau."
],
correct:2,
explain:"Thế hệ sau sẽ tiếp nối thế hệ trước."
},

{
type:"meaning",
question:"Một mặt người bằng mười mặt của.",
answers:[
"Con người quý giá hơn của cải.",
"Của cải quan trọng hơn con người.",
"Con người cần kiếm nhiều tiền."
],
correct:0,
explain:"Đề cao giá trị của con người."
},

{
type:"meaning",
question:"Tấc đất tấc vàng.",
answers:[
"Đất rất quý giá.",
"Đất luôn có vàng.",
"Muốn giàu phải đào vàng."
],
correct:0,
explain:"Đất đai là tài sản rất quý."
},

{
type:"meaning",
question:"Đói cho sạch, rách cho thơm.",
answers:[
"Luôn ăn mặc đẹp.",
"Giữ phẩm chất dù trong hoàn cảnh khó khăn.",
"Không nên mặc quần áo rách."
],
correct:1,
explain:"Khuyên giữ đạo đức và lòng tự trọng."
},

{
type:"meaning",
question:"Tiên học lễ, hậu học văn.",
answers:[
"Lễ nghĩa quan trọng trước kiến thức.",
"Chỉ cần học lễ.",
"Học văn quan trọng hơn đạo đức."
],
correct:0,
explain:"Đạo đức là nền tảng của việc học."
},

{
type:"meaning",
question:"Học ăn, học nói, học gói, học mở.",
answers:[
"Con người cần học cách ứng xử trong cuộc sống.",
"Chỉ cần học giao tiếp.",
"Chỉ cần học ở trường."
],
correct:0,
explain:"Mọi kỹ năng sống đều cần học."
},

{
type:"meaning",
question:"Khôn ngoan đối đáp người ngoài, gà cùng một mẹ chớ hoài đá nhau.",
answers:[
"Nên đoàn kết với người thân.",
"Không nên nuôi gà.",
"Không nên tranh luận."
],
correct:0,
explain:"Khuyên anh em trong nhà phải yêu thương nhau."
},

{
type:"meaning",
question:"Lá lành đùm lá rách.",
answers:[
"Giúp đỡ người khó khăn.",
"Trồng nhiều cây.",
"Không dùng lá rách."
],
correct:0,
explain:"Khuyên con người biết yêu thương và giúp đỡ nhau."
},

{
type:"meaning",
question:"Một con ngựa đau, cả tàu bỏ cỏ.",
answers:[
"Cả đàn cùng nhịn ăn.",
"Mọi người biết quan tâm nhau khi gặp khó khăn.",
"Ngựa rất thông minh."
],
correct:1,
explain:"Tinh thần đoàn kết và sẻ chia."
}
];

export default questions;
