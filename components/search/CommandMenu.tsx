"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { File, Laptop, Sparkles, Building, Settings, Calculator, User, Mail, CreditCard, LayoutDashboard } from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
    const router = useRouter()
    const [inputValue, setInputValue] = React.useState("")

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(true)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [setOpen])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [setOpen])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput
                placeholder="Arama yapın... (Örn: BIM, Mimari, Bulut)"
                value={inputValue}
                onValueChange={setInputValue}
            />
            <CommandList>
                <CommandEmpty>
                    Sonuç bulunamadı.
                    <button
                        className="mt-2 text-primary underline block mx-auto font-medium hover:text-primary/80 transition-colors"
                        onClick={() => runCommand(() => router.push(`/search?q=${encodeURIComponent(inputValue)}`))}
                    >
                        &quot;{inputValue}&quot; için tüm sonuçlarda ara &rarr;
                    </button>
                </CommandEmpty>

                {inputValue.length > 0 && (
                    <CommandGroup heading="Gelişmiş Arama">
                        <CommandItem
                            onSelect={() => runCommand(() => router.push(`/search?q=${encodeURIComponent(inputValue)}`))}
                            value={`search:${inputValue}`}
                        >
                            <Sparkles className="mr-2 h-4 w-4" />
                            <span className="font-bold">Tüm sonuçlarda ara: &quot;{inputValue}&quot;</span>
                        </CommandItem>
                    </CommandGroup>
                )}

                <CommandGroup heading="Önerilenler">
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-cloud-services"))}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Cloud Services</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-2026-yenilikler"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Yenilikler (2026)</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Ürünler">
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-bimplus"))}>
                        <Building className="mr-2 h-4 w-4" />
                        <span>BIMPLUS</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-ultimate"))}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Ultimate</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-professional"))}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Professional</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-concept"))}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Concept</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/allplan-basic"))}>
                        <Laptop className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Basic</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/civil"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Civil</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/products/precast"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>ALLPLAN Precast</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Çözümler">
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/architecture"))}>
                        <Building className="mr-2 h-4 w-4" />
                        <span>Mimari Tasarım</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/structural"))}>
                        <Building className="mr-2 h-4 w-4" />
                        <span>Strüktürel Mühendislik</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/mep"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>MEP (Mekanik, Elektrik, Tesisat)</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/infrastructure"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Altyapı Mühendisliği</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/road-railway"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Yol ve Demiryolu Tasarımı</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/bridge-design"))}>
                        <Building className="mr-2 h-4 w-4" />
                        <span>Köprü Tasarımı</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/precast"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Prekast Üretimi</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/steel"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Çelik Detaylandırma</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/site-planning"))}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Şantiye Planlaması</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/scalypso"))}>
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Scalypso (Nokta Bulutu)</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/solutions/ax3000"))}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>AX3000 (Enerji Simülasyonu)</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Genel">
                    <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
                        <User className="mr-2 h-4 w-4" />
                        <span>Hakkımızda</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/contact"))}>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>İletişim</span>
                    </CommandItem>
                    <CommandItem onSelect={() => runCommand(() => router.push("/references"))}>
                        <File className="mr-2 h-4 w-4" />
                        <span>Referanslar</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
