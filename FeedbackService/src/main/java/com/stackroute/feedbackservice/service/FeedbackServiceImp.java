package com.stackroute.feedbackservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.feedbackservice.model.Feedback;
import com.stackroute.feedbackservice.repository.FeedbackRepository;

@Service
public class FeedbackServiceImp implements FeedbackService {
	FeedbackRepository feedbackRepository;

	@Autowired
	public FeedbackServiceImp(FeedbackRepository feedbackRepository) {
		this.feedbackRepository = feedbackRepository;
	}

	@Override
	public Feedback saveFeedback(Feedback feedback) {
		Feedback savedFeedback = new Feedback();
		savedFeedback = feedbackRepository.save(feedback);
		return savedFeedback;
	}
}
