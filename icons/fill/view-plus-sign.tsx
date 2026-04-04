import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewPlusSign({
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
          d="M9.49998 14.251C9.49998 13.0103 10.5093 12.001 11.75 12.001H12V11.751C12 10.5103 13.0093 9.501 14.25 9.501C15.1987 9.501 16.0079 10.0928 16.3383 10.9253C16.4352 10.7747 16.5269 10.626 16.608 10.4829C17.1344 9.5547 17.1344 8.4458 16.6085 7.5171C15.547 5.6436 13.1476 3 9.00009 3C4.85259 3 2.45318 5.6436 1.39218 7.5171C0.865779 8.4458 0.865775 9.5542 1.39168 10.4829C2.45318 12.3564 4.85259 15 9.00009 15C9.21579 15 9.42389 14.9888 9.63019 14.9749C9.55189 14.7466 9.49998 14.5057 9.49998 14.251ZM5.99998 9C5.99998 7.3433 7.34318 6 8.99998 6C10.6568 6 12 7.3433 12 9C12 10.6567 10.6569 12 8.99998 12C7.34308 12 5.99998 10.6567 5.99998 9Z"
          fill={fill}
        />
        <path
          d="M16.75 13.501H15V11.751C15 11.337 14.664 11.001 14.25 11.001C13.836 11.001 13.5 11.337 13.5 11.751V13.501H11.75C11.336 13.501 11 13.837 11 14.251C11 14.665 11.336 15.001 11.75 15.001H13.5V16.751C13.5 17.165 13.836 17.501 14.25 17.501C14.664 17.501 15 17.165 15 16.751V15.001H16.75C17.164 15.001 17.5 14.665 17.5 14.251C17.5 13.837 17.164 13.501 16.75 13.501Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ViewPlusSign;
