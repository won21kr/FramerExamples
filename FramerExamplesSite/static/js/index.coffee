showExample = (exampleName) ->
	$("#code").attr "src", "code.html?name=#{exampleName}"
	$("#example").attr "src", "example.html?name=#{exampleName}"
	$("a.download").attr "href", "/static/examples/#{exampleName}.zip"

$(document).ready ->
	
	exampleName = window.location.hash[1..]

	if exampleName
		showExample exampleName

		$(".navigation ul li a").each ->
			if $(@).attr("href")[1..] == exampleName
				$(@).addClass "active"

	$(".navigation ul li a").click ->

		$(".navigation ul li a").removeClass "active"
		$(@).addClass "active"

		exampleName = $(@).attr("href")[1..]
		showExample exampleName

