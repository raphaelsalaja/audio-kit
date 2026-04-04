import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Palette2({
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
          d="M17 9C17 4.53657 13.3437 0.926057 8.8627 1.00109C4.69746 1.07071 1.18068 4.4953 1.00711 8.65877C0.827379 12.9705 4.06314 16.5663 8.23221 16.9636C8.95801 17.0332 9.61501 16.6823 10.0212 16.1745C10.5513 15.5118 10.6344 14.5963 10.2319 13.8493L9.99465 13.4085C9.7736 12.9981 10.071 12.5 10.537 12.5H13.5C15.433 12.5 17 10.9333 17 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.2426 6.5251C12.7544 7.0131 11.963 7.0131 11.4748 6.5251C10.9866 6.0368 10.9866 5.2456 11.4748 4.7573C11.963 4.269 12.7544 4.269 13.2426 4.7573C13.7308 5.2456 13.7308 6.0368 13.2426 6.5251Z"
          fill={fill}
        />
        <path
          d="M3 9C3 9.6904 3.5596 10.25 4.25 10.25C4.9404 10.25 5.5 9.6904 5.5 9C5.5 8.3096 4.9404 7.75 4.25 7.75C3.5596 7.75 3 8.3096 3 9Z"
          fill={fill}
        />
        <path
          d="M4.75729 6.5251C5.24549 7.0131 6.03689 7.0131 6.52509 6.5251C7.01329 6.0368 7.01329 5.2456 6.52509 4.7573C6.03689 4.269 5.24549 4.269 4.75729 4.7573C4.26909 5.2456 4.26909 6.0368 4.75729 6.5251Z"
          fill={fill}
        />
        <path
          d="M7.75 4.25C7.75 4.9404 8.3096 5.5 9 5.5C9.6904 5.5 10.25 4.9404 10.25 4.25C10.25 3.5596 9.6904 3 9 3C8.3096 3 7.75 3.5596 7.75 4.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Palette2;
