import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardLock({
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
          d="M1 5.75C1 4.23079 2.23079 3 3.75 3H14.25C15.7692 3 17 4.23079 17 5.75V8.7008C16.3151 7.96227 15.3364 7.5 14.25 7.5C12.2612 7.5 10.6333 9.04926 10.5078 11.0064C9.60133 11.583 9 12.5957 9 13.75V15H3.75C2.23079 15 1 13.7692 1 12.25V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.5 11.25C3.5 10.8358 3.83579 10.5 4.25 10.5H7.25C7.66421 10.5 8 10.8358 8 11.25C8 11.6642 7.66421 12 7.25 12H4.25C3.83579 12 3.5 11.6642 3.5 11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 12.0177V11.25C12 10.0078 13.0078 9 14.25 9C15.4922 9 16.5 10.0078 16.5 11.25V12.0177C17.3479 12.1391 18 12.8687 18 13.75V15.25C18 16.2162 17.2162 17 16.25 17H12.25C11.2838 17 10.5 16.2162 10.5 15.25V13.75C10.5 12.8687 11.1521 12.1391 12 12.0177ZM13.5 11.25C13.5 10.8362 13.8362 10.5 14.25 10.5C14.6638 10.5 15 10.8362 15 11.25V12H13.5V11.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 6.5H17V8H16.1217C15.5709 7.68198 14.9316 7.5 14.25 7.5C13.5684 7.5 12.9291 7.68198 12.3783 8H1V6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CreditCardLock;
