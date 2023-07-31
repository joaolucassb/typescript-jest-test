import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('João', 'Lucas', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'João');
    expect(sut).toHaveProperty('lastName', 'Lucas');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });
  it('Should have methods to get name and idn', () => {
    const sut = createIndividualCustomer('João', 'Lucas', '111.111.111-11');
    expect(sut.getName()).toBe('João Lucas');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '22.222.222-0001');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '22.222.222-0001');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Udemy', '22.222.222-0001');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('22.222.222-0001');
  });
});
