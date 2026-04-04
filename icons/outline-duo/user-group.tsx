import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserGroup({
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
          d="M9 5.75C9.82843 5.75 10.5 5.07843 10.5 4.25C10.5 3.42157 9.82843 2.75 9 2.75C8.17157 2.75 7.5 3.42157 7.5 4.25C7.5 5.07843 8.17157 5.75 9 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.323 11.499L11.471 9.086C11.189 8.286 10.435 7.751 9.58601 7.752C9.20501 7.752 8.79301 7.752 8.41201 7.752C7.56401 7.752 6.81001 8.287 6.52801 9.086L5.67701 11.499C5.58101 11.771 5.73401 12.067 6.01101 12.146L7.25001 12.5L7.44501 15.809C7.47601 16.338 7.91401 16.75 8.44301 16.75H9.55701C10.086 16.75 10.524 16.337 10.555 15.809L10.75 12.5L11.989 12.146C12.266 12.067 12.419 11.771 12.323 11.499Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.75C9.82843 5.75 10.5 5.07843 10.5 4.25C10.5 3.42157 9.82843 2.75 9 2.75C8.17157 2.75 7.5 3.42157 7.5 4.25C7.5 5.07843 8.17157 5.75 9 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.323 11.499L11.471 9.086C11.189 8.286 10.435 7.751 9.58601 7.752C9.20501 7.752 8.79301 7.752 8.41201 7.752C7.56401 7.752 6.81001 8.287 6.52801 9.086L5.67701 11.499C5.58101 11.771 5.73401 12.067 6.01101 12.146L7.25001 12.5L7.44501 15.809C7.47601 16.338 7.91401 16.75 8.44301 16.75H9.55701C10.086 16.75 10.524 16.337 10.555 15.809L10.75 12.5L11.989 12.146C12.266 12.067 12.419 11.771 12.323 11.499Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 4.25C14.5784 4.25 15.25 3.57843 15.25 2.75C15.25 1.92157 14.5784 1.25 13.75 1.25C12.9216 1.25 12.25 1.92157 12.25 2.75C12.25 3.57843 12.9216 4.25 13.75 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.193 15.25H14.307C14.836 15.25 15.274 14.837 15.305 14.309L15.5 11L16.739 10.646C17.016 10.567 17.169 10.271 17.073 9.999L16.221 7.586C15.939 6.786 15.185 6.251 14.336 6.252C13.955 6.252 13.543 6.252 13.162 6.252"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 4.25C5.07843 4.25 5.75 3.57843 5.75 2.75C5.75 1.92157 5.07843 1.25 4.25 1.25C3.42157 1.25 2.75 1.92157 2.75 2.75C2.75 3.57843 3.42157 4.25 4.25 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.80701 15.25H3.69301C3.16401 15.25 2.72601 14.837 2.69501 14.309L2.50001 11L1.26101 10.646C0.984012 10.567 0.831011 10.271 0.927011 9.999L1.77901 7.586C2.06101 6.786 2.81501 6.251 3.66401 6.252C4.04501 6.252 4.45701 6.252 4.83801 6.252"
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

export default UserGroup;
