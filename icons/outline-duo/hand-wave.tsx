import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandWave({
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
          d="m5.9266,3.3615c-.067-.388.0492-.8017.3465-1.099.4851-.4851,1.2799-.4879,1.7678,0l5.2786,5.2786-.3422-2.8426c-.0827-.6852.4101-1.3081,1.0918-1.3902s1.2268.3726,1.3902,1.0918l.7453,3.5171c.4214,1.987-.1909,4.0517-1.6263,5.4871l-1.2339,1.2339c-1.9523,1.9523-5.1187,1.9523-7.0711,0l-4.2433-4.2433c-.4879-.4879-.4851-1.2827,0-1.7678.2919-.2919.696-.4092,1.0779-.3499l-.4554-.4554c-.5353-.5353-.5353-1.4032,0-1.9384s1.4032-.5353,1.9384,0l-.8886-.8886c-.5326-.5326-.5326-1.3963,0-1.9289s1.3962-.5326,1.9289,0l.2957.2957Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m9.1015,6.8586l-3.7123-3.7123c-.4879-.4879-1.2827-.4851-1.7678,0s-.4879,1.2799,0,1.7678l3.7123,3.7123"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.5053,5.798c-.4879-.4879-1.2827-.4851-1.7678,0s-.4879,1.2799,0,1.7678l2.8284,2.8284"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.7975,8.6271c-.4879-.4879-1.2827-.4851-1.7678,0s-.4879,1.2799,0,1.7678l4.2433,4.2433c1.9523,1.9523,5.1187,1.9523,7.0711,0l1.2339-1.2339c1.4354-1.4354,2.0478-3.5002,1.6263-5.4871l-.7453-3.5171c-.1633-.7191-.7085-1.1738-1.3902-1.0918s-1.1745.705-1.0918,1.3902l.3422,2.8426-5.2786-5.2786c-.4879-.4879-1.2827-.4851-1.7678,0s-.4879,1.2799,0,1.7678"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.3194,7.541c-1.684.6567-2.4676,1.8203-2.3507,3.4902"
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

export default HandWave;
