import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleUserCheck({
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
          d="m9,10.0029c1.2444,0,2.2524-1.0084,2.2524-2.2524s-1.008-2.2524-2.2524-2.2524-2.2524,1.0084-2.2524,2.2524,1.0079,2.2524,2.2524,2.2524Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m4.4522,14.9423c.5683-1.9772,2.3748-3.4418,4.5478-3.4418s3.9784,1.4649,4.5477,3.4414c.0927.3219-.0392.6662-.3233.8437-1.2245.7648-2.6703,1.2149-4.2244,1.2149s-2.9989-.4501-4.2241-1.2148c-.2841-.1773-.4162-.5215-.3237-.8434Z"
          fill={secondaryfill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1c.3223,0,.6587.0244,1.0586.0771.4106.0542.6997.4312.6455.8418-.0542.4111-.4331.7021-.8418.6455-.2827-.0371-.5688-.0645-.8623-.0645-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5c0-.4976-.0645-1.0156-.1919-1.54-.0977-.4023.1494-.8081.5522-.9058.4023-.0957.8081.1494.9058.5522.1553.6396.2339,1.2769.2339,1.8936,0,4.4111-3.5889,8-8,8Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m13.8525,6c-.189,0-.3721-.0713-.5112-.2017l-1.6089-1.5c-.3032-.2822-.3198-.7568-.0371-1.0596.2827-.3032.7573-.3193,1.0596-.0371l1.0073.9385,2.3945-3.0986c.2524-.3281.7246-.3892,1.0518-.1348.3276.2529.3882.7241.1348,1.0518l-2.8975,3.75c-.1289.167-.3223.272-.5322.2891-.0205.0015-.041.0024-.061.0024Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleUserCheck;
