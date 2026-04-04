import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cards({
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
          d="M9.25 1H2.75C1.7835 1 1 1.7835 1 2.75V11.25C1 12.2165 1.7835 13 2.75 13H9.25C10.2165 13 11 12.2165 11 11.25V2.75C11 1.7835 10.2165 1 9.25 1Z"
          fill={fill}
        />
        <path
          d="M12.5247 5.13306C12.6299 4.73246 13.0401 4.49305 13.4407 4.59833L15.4737 5.13263C16.4074 5.37918 16.9669 6.33606 16.7203 7.27101C16.7203 7.27116 16.7203 7.27085 16.7203 7.27101L14.4283 15.974C14.1817 16.9078 13.2249 17.4669 12.29 17.2203L7.56407 15.9753C7.16352 15.8697 6.92435 15.4595 7.02987 15.0589C7.13539 14.6584 7.54564 14.4192 7.94619 14.5247L12.6721 15.7697C12.8049 15.8048 12.9422 15.7258 12.9778 15.5919C12.9778 15.592 12.9778 15.5917 12.9778 15.5919L15.2698 6.889C15.3048 6.75616 15.2258 6.61871 15.0918 6.58321C15.0917 6.58319 15.0919 6.58323 15.0918 6.58321L13.0594 6.04907C12.6588 5.94378 12.4194 5.53367 12.5247 5.13306Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Cards;
