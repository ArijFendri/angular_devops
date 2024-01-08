# Use a lightweight base image
FROM nginx:1.15

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the 'dist' folder from your locally built Angular app
COPY dist/app .
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]