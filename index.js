function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    // return the first person in line and remove that person from the line
  } else {
    return "There is nobody waiting to be served!"
  }
}