function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowUp = katzDeliLine.shift();
    return `Currently serving ${nowUp}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if line.length === 0 {
    return "The line is currently empty."
  } else {
    // do a thing
    return "foo"
  }
}