from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    # Collect the user's selections
    shege_count = sum([1 for i in range(1, 21) if request.form.get(f'shege{i}')])

    # Classify the result based on the number of sheges
    if shege_count <= 5:
        category = "Shege Amateur"
        icon = "shege_amateur.png"
        tagline = "You never see anything. Still dey play."
    elif shege_count <= 10:
        category = "Shege Enthusiast"
        icon = "shege_enthusiast.png"
        tagline = "Your shege experience needs some touch-up; you'll get there soon."
    elif shege_count <= 15:
        category = "Shege Connoisseur"
        icon = "Shege_Connoisseur.png"
        tagline = "Shege sat you down! You have wined and dined with shege."
    else:
        category = "ShegeNator"
        icon = "shegenator.png"
        tagline = "Shege dey see dey run."

    return render_template('result.html', category=category, icon=icon, tagline=tagline, score=shege_count)

if __name__ == "__main__":
    app.run()
