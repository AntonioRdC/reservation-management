<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={70}>
    <div className="flex flex-row gap-2 items-center justify-start p-6">
      <p className="font-extrabold">1. </p>
    </div>
    <Separator />
    <div className="flex flex-row gap-2 items-center justify-start p-6">
      <p className="font-extrabold">2. Data e Horario</p>
      <Popover>
        <PopoverTrigger asChild className="ml-10">
          <Button
            variant={'outline'}
            className={cn(
              'w-[240px] justify-start text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              format(date, 'PPP', { locale: ptBR })
            ) : (
              <p>Escolha a data</p>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Selecione o Horário" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Manhã</SelectLabel>
            {availableTimes.morning.map((hour) => (
              <SelectItem key={hour} value={hour.toString()}>
                {hour}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Tarde</SelectLabel>
            {availableTimes.afternoon.map((hour) => (
              <SelectItem key={hour} value={hour.toString()}>
                {hour}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Noite</SelectLabel>
            {availableTimes.night.map((hour) => (
              <SelectItem key={hour} value={hour.toString()}>
                {hour}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <Separator />
    <div className="flex flex-row gap-2 items-center justify-start p-6">
      <p className="font-extrabold">3. Equipamentos necessários</p>
      <RadioGroup
        className="ml-10"
        defaultValue={spaces[0].name}
        onValueChange={handleSelectChange}
      >
        {spaces.map((space) => (
          <div className="flex items-center space-x-2" key={space.id}>
            <RadioGroupItem value={space.name} id={space.id} />
            <Label htmlFor={space.name}>{space.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  </ResizablePanel>
  <ResizablePanel defaultSize={30}>
    <div className="flex flex-col items-center justify-center ml-10 p-4 gap-4 border rounded-xl border-zinc-200 dark:border-zinc-700">
      <p className="font-extrabold">Informações do Espaço</p>
      <Separator />
      <div className="flex w-full justify-between">
        <p className="justify-start items-start">Espaço:</p>
        <p className="justify-end items-end">{selectedSpace?.name}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="justify-start items-start">Capacidade:</p>
        <p className="justify-end items-end">{selectedSpace?.capacity}</p>
      </div>
      <Separator />
      <div className="flex w-full justify-between">
        <p className="justify-start items-start">Data:</p>
        <p className="justify-end items-end">{selectedSpace?.capacity}</p>
      </div>
      <div className="flex w-full justify-between">
        <p className="justify-start items-start">Horário:</p>
        <p className="justify-end items-end">{selectedSpace?.capacity}</p>
      </div>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>;












<div className="mb-4">
<Label htmlFor="dominio" className="block text-sm font-medium mb-1">
  Domínio
</Label>
<div className="flex items-center gap-3">
  <Input
    id="dominio"
    placeholder="Deixar em branco para obter o valor gerado automaticamente"
  />
  <span className="text-sm ">.sa-east-1.elasticbeanstalk.com</span>
  <Button variant="outline">Verificar disponibilidade</Button>
</div>
</div>

<div className="mb-4">
<Label
  htmlFor="descricao-ambiente"
  className="block text-sm font-medium mb-1"
>
  Descrição do ambiente
</Label>
<Textarea id="descricao-ambiente" rows={3} className="resize-y" />
</div>

<div className="mb-4">
<Label className="block text-sm font-medium mb-1">
  Tipo de plataforma
</Label>
<RadioGroup defaultValue="gerenciada">
  <div className="flex items-start gap-4 mb-2">
    <RadioGroupItem id="gerenciada" value="gerenciada" />
    <Label htmlFor="gerenciada" className="text-sm">
      Plataforma gerenciada
    </Label>
    <p className="text-xs  ml-6">
      As plataformas publicadas e mantidas pelo Amazon Elastic
      Beanstalk.{' '}
      <a href="#" className="text-blue-600">
        Saiba mais
      </a>
    </p>
  </div>
  <div className="flex items-start gap-4">
    <RadioGroupItem id="personalizada" value="personalizada" />
    <Label htmlFor="personalizada" className="text-sm">
      Plataforma personalizada
    </Label>
    <p className="text-xs  ml-6">
      As plataformas criadas por você e de sua propriedade.
    </p>
  </div>
</RadioGroup>
</div>

<div className="mb-4">
<Label
  htmlFor="plataforma"
  className="block text-sm font-medium mb-1"
>
  Plataforma
</Label>
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Escolher uma plataforma" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="plataforma1">Plataforma 1</SelectItem>
    <SelectItem value="plataforma2">Plataforma 2</SelectItem>
  </SelectContent>
</Select>
</div>

<div className="mb-4">
<Label
  htmlFor="ramificacao"
  className="block text-sm font-medium mb-1"
>
  Ramificação da plataforma
</Label>
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Escolher uma ramificação da plataforma" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="ramificacao1">Ramificação 1</SelectItem>
    <SelectItem value="ramificacao2">Ramificação 2</SelectItem>
  </SelectContent>
</Select>
</div>

<div className="mb-4">
<Label htmlFor="versao" className="block text-sm font-medium mb-1">
  Versão da plataforma
</Label>
<Select disabled>
  <SelectTrigger>
    <SelectValue placeholder="Escolher uma versão da plataforma" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="versao1">Versão 1</SelectItem>
    <SelectItem value="versao2">Versão 2</SelectItem>
  </SelectContent>
</Select>
</div>
