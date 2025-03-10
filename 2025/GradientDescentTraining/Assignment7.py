# Gradient Descent learning

# Assignment 7: 

import numpy as np
import matplotlib.pyplot as plt

# class to create a neural network with single neuron
class NeuralNetwork(object):
    def __init__(self):
        # Using seed to make sure it'll generate same weights in every run
        np.random.seed(1)
        # 3x1 weight matrix
        self.weight_matrix = 2 * np.random.random((3, 1)) - 1  #random weights
                                                              #between -1 and 1
        self.l_rate = 1

        # #Also, it creates a history variable that saves the weights and the training cost after each epoch (i.e., iteration).
        # self.history = []
    # Sigmoid as activation function
    def sigmoid(self, x):
        return 1/(1 + np.exp(-x))

    # forward propagation
    def forward_propagation(self, inputs):
        outs=np.dot(inputs, self.weight_matrix)
        return self.sigmoid(outs)

    # training the neural network using gradient descent learning
    def train_GDL(self, train_inputs, train_outputs,
                  num_train_iterations=100):
        N=train_inputs.shape[0]
        cost_func = np.array([])
        # Number of iterations we want to perform for this set of input
        for iteration in range(num_train_iterations):


            outputs = self.forward_propagation(train_inputs)
            # Calculate the error in the output
            error = train_outputs - outputs
            adjustment = (self.l_rate/N)*np.sum(np.multiply(error,train_inputs),
                                              axis=0)
            # Calculate the cost function
            cost_func = np.append(cost_func, 1/(2*N)*np.sum(np.power(error,2)))
            # Adjust the weight matrix
            self.weight_matrix[:,0] += adjustment
            # plot the separating line based on the weights
            print('Iteration #'+str(iteration))
            plot_fun_thr(train_inputs[:,1:3], train_outputs, self.weight_matrix[:,0], classes)
        plot_cost_func(cost_func, num_train_iterations)

                # predicting the cla
                # 
                # sses of new data points
    def pred(self, inputs):
        prob = self.forward_propagation(inputs)
        preds = np.int8(prob >= 0.5)
        return preds

def plot_cost_func(J, iterations):
    # plotting the learning curve
    x = np.arange(iterations, dtype=int)
    y = J
    plt.plot(x,y)
    plt.axis([-1,x.shape[0]+1,-1,np.max(y)+1])
    plt.title('Learning curve')
    plt.xlabel('X: Iteration number')
    plt.ylabel('Y: J(0)')
    plt.show()

def plot_fun(features, labels, classes):
    plt.plot(features[labels[:]==classes[0],0], features[labels[:]==classes[0],1], 'rs',
             features[labels[:]==classes[1],0], features[labels[:]==classes[1],1], 'g^')
    plt.axis([-1,2,-1,2])
    plt.xlabel('X: feature 1')
    plt.ylabel('Y: feature 2')
    plt.legend(['Class '+str(classes[0]), 'Class '+str(classes[1])])
    plt.show()

def plot_fun_thr(features, labels, thre_parms, classes):
    #plotting the data points
    plt.plot(features[labels.flatten()==classes[0],0], features[labels.flatten()==classes[0],1], 'rs',
             features[labels.flatten()==classes[1],0], features[labels.flatten()==classes[1],1], 'g^')
    plt.axis([-1,2,-1,2])
    #plotting the separating line
    x1 = np.linspace(-1,2,50)
    x2 = -(thre_parms[1]*x1+thre_parms[0])/thre_parms[2]  # w1 x1 + w2 x2 + w0 = 0 -> x2 = -(w1 x1 + w0)/w2
    plt.plot(x1, x2, '-r')
    plt.xlabel('X: feature 1')
    plt.ylabel('Y: feature 2')
    plt.legend(['Class '+str(classes[0]), 'Class '+str(classes[1])])
    plt.show()
    
# Separate block ------------------------------------------------------------

# Create sample data
features = np.array([[0,0], [0,1], [1,0], [1,1]])
labels = np.array([0,0,0,1])
classes = [0,1]

# Plot the initial data
plot_fun(features, labels, classes)

# Separate block ------------------------------------------------------------
# Add bias term to features
bias = np.ones((features.shape[0],1))  #adding the bias vector
features = np.append(bias, features, axis=1)

# Print the features matrix shape
print('Features matrix:')
print(features)
print('Features matrix shape')
print(features.shape)

# Separate block ------------------------------------------------------------


# Create and train neural network
neural_network = NeuralNetwork()
print('Random weights at the start of training:')
print(neural_network.weight_matrix)

# Train using gradient descent learning
neural_network.train_GDL(features, np.expand_dims(labels, axis=1), 10)

print('New weights after training:')
print(neural_network.weight_matrix)

# Test the neural network with training data points
print('Testing network on training data points ->')
print(neural_network.pred(features))

# Test the neural network with a new data point
print('Testing network on new examples ->')
print(neural_network.pred(np.array([[1, 1, 1]])))