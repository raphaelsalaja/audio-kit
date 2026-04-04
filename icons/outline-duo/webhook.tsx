import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Webhook({
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
          d="M10.4435 6.78686C11.3713 6.2894 12 5.32729 12 4.22198C12 2.60649 10.6569 1.29688 9 1.29688C7.34315 1.29688 6 2.60649 6 4.22198C6 5.33326 6.63556 6.29979 7.57159 6.79488L5.31988 10.7528C4.87521 10.4986 4.35742 10.3529 3.80472 10.3529C2.14786 10.3529 0.804718 11.6625 0.804718 13.278C0.804718 14.8935 2.14786 16.2031 3.80472 16.2031C5.45584 16.2031 6.79542 14.9026 6.80467 13.2948L11.2457 13.2672C11.2457 13.2708 11.2457 13.2744 11.2457 13.278C11.2457 14.8935 12.5889 16.2031 14.2457 16.2031C15.9026 16.2031 17.2457 14.8935 17.2457 13.278C17.2457 11.6625 15.9026 10.3529 14.2457 10.3529C13.6884 10.3529 13.1666 10.5011 12.7195 10.7592L10.4435 6.78686Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.80399 13.278L7.52499 6.83401C6.61499 6.31901 6.00099 5.34201 6.00099 4.22101C6.00099 2.56401 7.34399 1.22101 9.00099 1.22101C10.658 1.22101 12.001 2.56401 12.001 4.22101C12.001 4.30101 11.998 4.38001 11.992 4.45801"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.246 13.25H6.805C6.814 14.296 6.275 15.315 5.305 15.876C3.87 16.704 2.035 16.213 1.207 14.778C0.378999 13.343 0.869999 11.508 2.305 10.68C2.374 10.64 2.444 10.603 2.515 10.57"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.22198L12.72 10.666C13.621 10.135 14.774 10.092 15.745 10.652C17.18 11.48 17.672 13.315 16.843 14.75C16.014 16.185 14.18 16.677 12.745 15.848C12.676 15.808 12.609 15.766 12.545 15.722"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.80399 14.528C4.49434 14.528 5.05399 13.9684 5.05399 13.278C5.05399 12.5877 4.49434 12.028 3.80399 12.028C3.11363 12.028 2.55399 12.5877 2.55399 13.278C2.55399 13.9684 3.11363 14.528 3.80399 14.528Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9 5.47199C9.69036 5.47199 10.25 4.91234 10.25 4.22199C10.25 3.53163 9.69036 2.97198 9 2.97198C8.30964 2.97198 7.75 3.53163 7.75 4.22199C7.75 4.91234 8.30964 5.47199 9 5.47199Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.248 14.502C14.9383 14.502 15.498 13.9424 15.498 13.252C15.498 12.5617 14.9383 12.002 14.248 12.002C13.5576 12.002 12.998 12.5617 12.998 13.252C12.998 13.9424 13.5576 14.502 14.248 14.502Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Webhook;
