Rails.application.routes.draw do
  	resources :best_sellers
	resources :users, only: [:create, :show	]
	post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
end
