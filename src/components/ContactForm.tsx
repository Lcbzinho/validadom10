import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { useInputMask } from "@/hooks/useInputMask";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, CreditCard, MapPin, Navigation } from "lucide-react";

export const ContactForm = () => {
  const { maskPhone, maskCPF, maskCEP } = useInputMask();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      endereco: "",
      cep: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Formulário enviado:", data);
    toast.success("Formulário enviado com sucesso!", {
      description: `Obrigado, ${data.nome}! Entraremos em contato em breve.`,
    });
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nome Completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu nome completo"
                  {...field}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  {...field}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefone
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="(99) 99999-9999"
                  {...field}
                  onChange={(e) => field.onChange(maskPhone(e.target.value))}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                CPF
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="999.999.999-99"
                  {...field}
                  onChange={(e) => field.onChange(maskCPF(e.target.value))}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endereco"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Endereço Completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Rua, número, bairro, cidade - UF"
                  {...field}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cep"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                CEP
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="99999-999"
                  {...field}
                  onChange={(e) => field.onChange(maskCEP(e.target.value))}
                  className="form-input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full form-button">
          Enviar
        </Button>
      </form>
    </Form>
  );
};
