import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GearArrowRight({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9 11.2495C10.2426 11.2495 11.25 10.2422 11.25 8.99951C11.25 7.75687 10.2426 6.74951 9 6.74951C7.75736 6.74951 6.75 7.75687 6.75 8.99951C6.75 10.2422 7.75736 11.2495 9 11.2495Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 12.25L16.75 14.75L14.25 17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 14.75H11.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.0968 9.88599C16.194 9.73159 16.25 9.5494 16.25 9.3551V8.64511C16.25 8.13511 15.867 7.70709 15.36 7.65109L14.2661 7.52911C14.0401 6.98311 13.989 6.86109 13.763 6.31509L14.451 5.45609C14.769 5.05909 14.737 4.48511 14.377 4.12411L13.875 3.6221C13.515 3.2621 12.941 3.2301 12.543 3.5481L11.6841 4.23611C11.1381 4.01011 11.016 3.95909 10.47 3.73309L10.3481 2.6391C10.2921 2.1331 9.86405 1.74911 9.35405 1.74911H8.64404C8.13404 1.74911 7.70604 2.1321 7.65004 2.6391L7.52805 3.73309C6.98205 3.95909 6.86004 4.00911 6.31404 4.23611L5.45505 3.5481C5.05705 3.2301 4.48405 3.2611 4.12305 3.6221L3.62105 4.12411C3.26105 4.48412 3.22904 5.05809 3.54704 5.45609L4.23505 6.31509C4.00905 6.86109 3.95804 6.98311 3.73204 7.52911L2.63805 7.65109C2.13205 7.70709 1.74805 8.13511 1.74805 8.64511V9.3551C1.74805 9.8641 2.13105 10.2931 2.63805 10.3491L3.73204 10.4711C3.95804 11.0171 4.00905 11.1391 4.23505 11.6851L3.54805 12.5441C3.23005 12.9411 3.26104 13.5151 3.62204 13.8761L4.12404 14.3781C4.48404 14.7381 5.05804 14.7701 5.45604 14.4521L6.31505 13.7641C6.86105 13.9901 6.98305 14.0411 7.52905 14.2671L7.65105 15.3611C7.70705 15.8671 8.13505 16.2511 8.64505 16.2511H9.15245"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default GearArrowRight;
