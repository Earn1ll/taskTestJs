public with sharing class TestJsAccountController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts() {
    return [SELECT Id, Name FROM Account ORDER BY Name LIMIT 5];
  }
}
