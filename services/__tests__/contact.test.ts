import { contactService } from '../contact';
import { api } from '@/lib/api';

jest.mock('@/lib/api', () => ({
  api: {
    post: jest.fn(),
  },
}));

describe('contactService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('sends message successfully', async () => {
    const mockData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello',
    };
    
    (api.post as jest.Mock).mockResolvedValueOnce({ success: true });

    await contactService.sendMessage(mockData);

    expect(api.post).toHaveBeenCalledWith('api/contact', mockData);
  });
});
