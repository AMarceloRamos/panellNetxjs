// Importamos íconos desde Heroicons (versión outline)
import { CheckIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/outline';

// Importamos clsx, que sirve para aplicar clases condicionales
import clsx from 'clsx';

// Componente funcional que recibe una propiedad llamada "status" de tipo string
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      // Aquí usamos clsx para aplicar clases según el valor de "status"
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs', // clases comunes
        {
          // Clases específicas si el estado es 'pending'
          'bg-gray-100 text-gray-500': status === 'pending',
          // Clases si es 'paid'
          'bg-green-500 text-white': status === 'paid',
          // Clases si es 'cancelled' (nuevo ejemplo)
          'bg-red-100 text-red-600': status === 'cancelled',
        }
      )}
    >
      {/* Si el estado es 'pending', renderiza texto e ícono de reloj */}
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}

      {/* Si el estado es 'paid', renderiza texto e ícono de check */}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}

      {/* Si el estado es 'cancelled', renderiza texto e ícono de cancelación */}
      {status === 'cancelled' ? (
        <>
          Cancelled
          <XCircleIcon className="ml-1 w-4 text-red-600" />
        </>
      ) : null}
    </span>
  );
}
