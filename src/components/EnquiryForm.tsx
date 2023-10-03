import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import { getStrapiURL } from '@/utils/api-helpers';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

function EnquiryForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<any>({
    defaultValues: {
      name: undefined,
      email: undefined,
      subject: undefined,
      message: undefined
    }
  });

  const onSubmit = async (values: any) => {
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/enquiries`;

      const requestUrl = `${getStrapiURL(`/api${path}`)}`;

      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData: any = await axios.post(
        requestUrl,
        {
          data: {
            name: values?.name ?? '',
            email: values?.email ?? '',
            subject: values?.subject ?? '',
            message: values?.message ?? ''
          }
        },
        options
      );
      toast({
        description: 'Your message has been sent.'
      });
    } catch (error) {}
  };

  return (
    <div className="mt-8 md:mt-0">
      <h3 className="text-start font-medium text-black md:text-2xl">
        Write Us a Message
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="grid gap-4 pt-5">
          <div className="grid gap-3 md:gap-4">
            <div className="grid grid-cols-1 items-center gap-1">
              <Input
                {...register('name')}
                id="name"
                defaultValue=""
                className="col-span-2 h-14 shadow-[0px_1px_10px_0px_#00000029]"
                placeholder="Your Name"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-1">
              <Input
                {...register('email')}
                id="email"
                defaultValue=""
                className="col-span-2 h-14 shadow-[0px_1px_10px_0px_#00000029]"
                placeholder="Your E-mail"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-1">
              <div>
                <Input
                  {...register('subject')}
                  id="subject"
                  placeholder="Subject"
                  defaultValue=""
                  type="string"
                  className="col-span-2 h-14  shadow-[0px_1px_10px_0px_#00000029]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-1 pt-2 md:pt-4">
              <Textarea
                {...register('message')}
                id="message"
                placeholder="Write a Message"
                defaultValue=""
                className="col-span-2 h-28 resize-none"
                rows={5}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <Button className="mt-6 h-11 w-36" variant={'blue'} size={'default'}>
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
