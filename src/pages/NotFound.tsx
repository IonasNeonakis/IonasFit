import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Home, MoveLeft } from 'lucide-react'

export function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full bg-muted p-6">
                            <span className="text-4xl font-bold text-primary">404</span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl">Page Not Found</CardTitle>
                    <CardDescription>
                        The page you are looking for does not exist or has been moved.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                    Don't worry, it happens to the best of us. Let's get you back on track.
                </CardContent>
                <CardFooter className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto"
                    >
                        <MoveLeft className="mr-2 h-4 w-4" />
                        Go back
                    </Button>
                    <Button asChild className="w-full sm:w-auto">
                        <Link to="/">
                            <Home className="mr-2 h-4 w-4" />
                            Start Over
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}