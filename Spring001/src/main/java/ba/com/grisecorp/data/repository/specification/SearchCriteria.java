package ba.com.grisecorp.data.repository.specification;

import ba.com.grisecorp.data.repository.specification.enums.SearchOperation;

public class SearchCriteria {

	private String key;
	private Object value;
	private SearchOperation operation;

	public SearchCriteria() {
	}

	public SearchCriteria(String key, Object value, SearchOperation operation) {
	    this.key = key;
	    this.value = value;
	    this.operation = operation;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public Object getValue() {
		return value;
	}

	public void setValue(Object value) {
		this.value = value;
	}

	public SearchOperation getOperation() {
		return operation;
	}

	public void setOperation(SearchOperation operation) {
		this.operation = operation;
	}

}
